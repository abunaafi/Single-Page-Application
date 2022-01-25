const router = async ()=> {
const routes =[
{path:"/", view: ( => console.log("viewing Dashboard"))},
{path:"/posts", view: ( => console.log("viewing posts"))},
{path:"/settings", view: ( => console.log("viewing settings"))},
];
};

cont potentialMatches = routes.map(route =>{
    return {
        route: route,
        isMatch: location.pathname === route.path
    }
    console.log(potentialMatches);
});
document.addEventListener("DOMContentLoaded", ( => {
    router ();
}));