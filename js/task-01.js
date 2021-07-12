const categories = document.querySelectorAll('li.item');
console.log(`В списке ${categories.length} категории`);

const arr = categories.forEach(category => {
        console.log('Категория: ', category.firstElementChild.textContent);

        const quantityOfCategoryList = 
        category.firstElementChild.nextElementSibling.querySelectorAll('li').length;

        return console.log(`Количество элементов: ${quantityOfCategoryList}`);
    }
)