const select = document.querySelector('#users')

const getUsers = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  };

window.addEventListener ('load', async() => {
    const {data} = await getUsers();
    data.forEach(user => {
        const option = document.createElement('option')
        option.value=user.id
        option.textContent=user.id
        select.appendChild(option)
    });
})