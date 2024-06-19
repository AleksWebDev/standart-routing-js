const homeComponent = {
    render: (() => {
        return `
            <section>
                <h1>Главная странице</h1>
                <p>Lorem ipsum...</p>
            </section>
        `
    })
};

const itemComponent = {
    render: (() => {
        return `
            <section>
                <h1>Страница с компонентами</h1>
                <p>Lorem ipsum...</p>
            </section>
        `
    })
};

const favsComponent = {
    render: (() => {
        return `
            <section>
                <h1>Избранное</h1>
                <p>Lorem ipsum...</p>
            </section>
        `
    })
};

const bidsComponent = {
    render: (() => {
        return `
            <section>
                <h1>Заявки</h1>
                <p>Lorem ipsum...</p>
            </section>
        `
    })
};

const errorComponent = {
    render: (() => {
        return `
            <section>
                <h1>Ошибка 404</h1>
                <p>Lorem ipsum...</p>
            </section>
        `
    })
};

const routes = [
    {path: '/', component: homeComponent},
    {path: 'item', component: itemComponent},
    {path: 'favourites', component: favsComponent},
    {path: 'bids', component: bidsComponent},
    {path: '', component: errorComponent},
];


function findComponentsByPath(path, routes){
    return routes.find((rout) => {
        return rout.path === path;
    })
}

function router(){
    const pathArr = location.hash.split('/');
    const currentPath = pathArr[0] === '' ? '/' : pathArr[1];

    let { component = errorComponent } = findComponentsByPath(currentPath, routes) || {};

    console.log(component);

    document.querySelector('#app').innerHTML = component.render();
}

window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);