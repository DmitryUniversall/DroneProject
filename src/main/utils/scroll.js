function scrollTo(id, behavior) {
    let menu = document.getElementById("HMenu")
    let element = document.getElementById(id)

    if (element === null || menu === null) {
        console.log(`Can not scroll to ${id} because menu or element was not found`)
        return
    }

    window.scrollTo({
        top: element.offsetTop - menu.offsetHeight,
        behavior: !behavior ? 'smooth' : behavior,
    });
}


function isInViewport(element) {
    const rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


export {
    scrollTo,
    isInViewport
}
