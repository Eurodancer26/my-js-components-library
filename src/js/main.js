
import $ from './lib/lib';

$('#trigger').click(() => {
    $('#trigger').createModal({
        text: {
            title: 'Modal title',
            body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex repellendus ducimus iusto? Dicta ea necessitatibus, facilis culpa quos laudantium debitis voluptatum nisi repellat tempora dolore, exercitationem quidem incidunt voluptatibus deserunt!'
        },
        btns: {
            count: 3,
            settings: [
                [
                    'Close',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Save changes',
                    ['btn-success'],
                    false,
                    () => {
                        alert('Данные сохранены');
                    }
                ],
                [
                    'Another btn',
                    ['btn-warning', 'ml-10'],
                    false,
                    () => {
                        alert('Данные');
                    }
                ]
            ]

        }
    });
});
