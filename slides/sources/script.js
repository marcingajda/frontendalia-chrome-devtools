var users = [
    {name: 'Krzysztof', age: '24', country: 'Poland', city: 'Gliwice', roles: ['admin'] },
    {name: 'Camila', age: '22', country: 'Spain', city: 'Barcelona', roles: [], deleted: true },
    {name: 'Tim', age: '35', country: 'Germany', city: 'Berlin', roles: ['user', 'moderator'] },
    {name: 'Jade', age: '31', country: 'France', city: 'Metz', roles: ['user'] }
];

function searchUserWithRole(role) {
    var results = [];

    users.forEach((user) => {

        if(user.roles == role) {
            results.push(user)
        }

    });

    displayList(results)
}






function displayList(list) {
    var node = jQuery('#found').html('');
    list.forEach((user) => {
        node.append(['<li>', user.name, '</li>'].join(''))
    });
}

jQuery('#search').click(() => {
    searchUserWithRole(jQuery('#roles').val())
});