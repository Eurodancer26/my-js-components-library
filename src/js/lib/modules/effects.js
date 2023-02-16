import $ from '../core';

$.prototype.animateOverTime = function(dur, cb, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart,
            complection = Math.min(timeElapsed / dur, 1);

        cb(complection);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === 'function') {
                fin();
            }
        }

    }

    return _animateOverTime;
};

$.prototype._showFadeIn = function(i, dur, display, fin) {
    this[i].style.display = display || 'block'; // параметр по умолчанию, более древний способ

    const _fadeIn = (complection) => {
        this[i].style.opacity = complection;
    },

    ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);

    return this;
};

$.prototype.fadeIn = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        this._showFadeIn(i, dur, display, fin);
    }

    return this;
};

$.prototype.fadeOut = function(dur, fin) {
    for (let i = 0; i < this.length; i++) {
        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.display = 'none';
            }
        },

        ani = this.animateOverTime(dur, _fadeOut, fin);
        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeToggle = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            this._showFadeIn(i, dur, display, fin);
        } else {
            this.fadeOut(dur, fin);
        }
    }

    return this;
};
