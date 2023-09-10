function scrollTo(id) {
    let menu = document.getElementById("HMenu")
    let element = document.getElementById(id)

    if (element === null || menu === null) {
        console.log(`Can not scroll to ${id} because menu or element was not found`)
        return
    }

    window.scrollTo({
        top: element.offsetTop - menu.offsetHeight,
        behavior: 'smooth',
    });
}


export {
    scrollTo,
}
