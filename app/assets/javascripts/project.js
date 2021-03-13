document.addEventListener('turbolinks:load', function () {
    const openProjectButton = document.getElementById('new-project-button')
    //console.log(openProjectButton)

    const projectPopover = document.getElementById('new-project-popover')

    if (openProjectButton && projectPopover) {
        openProjectButton.addEventListener('click', function () {
            return projectPopover.classList.contains('is-hidden') ? projectPopover.classList.remove('is-hidden') : null
        }, false)

        const cancelProjectPopover = document.getElementById('cancel-project-popover')

        cancelProjectPopover.addEventListener('click', function () {
            return projectPopover.classList.add('is-hidden')
        }, false)
    }
})