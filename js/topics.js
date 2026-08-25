// ==========================================
// TOPIC ACCORDION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    const categoryButtons =
        document.querySelectorAll('.category-toggle');


    categoryButtons.forEach(button => {

        button.addEventListener('click', () => {

            const category =
                button.closest('.topic-category');


            // Fecha outras categorias abertas
            document
                .querySelectorAll('.topic-category.open')
                .forEach(openCategory => {

                    if (openCategory !== category) {

                        openCategory.classList.remove('open');

                    }

                });


            // Abre ou fecha a categoria selecionada
            category.classList.toggle('open');

        });

    });

});