
(function () {
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text) {
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Img, name, text)

        customers.push(customer)
    }

    createCustomer(0, 'Jessica', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt asperiores numquam, facere fugiat sunt esse adipisci libero possimus molestiae officia delectus debitis unde rerum veniam?')
    createCustomer(1, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore doloremque maxime exercitationem distinctio? Sit, debitis!')
    createCustomer(2, 'Amy', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat hic delectus, natus eum odio laudantium sapiente eveniet vitae, neque mollitia necessitatibus sed eos, non accusantium!')
    createCustomer(3, 'Tyrell', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et fugit, minus minima assumenda quam pariatur ipsam, sapiente quia tempora ipsa, incidunt recusandae placeat unde. Eveniet quo aperiam explicabo quasi.')
    createCustomer(4, 'Wanda', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odio rem dolores consequatur. Consequuntur minima harum reprehenderit. Consequatur cumque, laboriosam sed harum earum omnis molestias est obcaecati veritatis? Earum natus officia labore a sequi vel possimus, molestias quas voluptatem? Quas, rerum impedit! Reprehenderit, sint veritatis.')

    btn.forEach(function (button) {
        button.addEventListener('click', function(e) {
            if (e.target.parentElement.classList.contains('prevBtn')) {
                if (index === 0) {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++
                if (index === customers.length) {
                    index = 0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })

})()
















