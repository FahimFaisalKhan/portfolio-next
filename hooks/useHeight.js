import { useEffect } from "react"

export const useHeight = () => {
    function navigationcontent(event) {
        // event.preventDefault();
        const attribute = event.currentTarget.getAttribute("href")
        const targetPosition = document.querySelector(attribute).offsetTop
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition

        const duration = 1000
        let start = null

        window.requestAnimationFrame(step)
        function step(timestamp) {
            if (!start) {
                start = timestamp
                console.log(timestamp)
            }

            const progress = timestamp - start
            const aaa = window.scrollTo(
                0,
                distance * (progress / duration) + startPosition
            )

            if (progress < duration) window.requestAnimationFrame(step)
        }
    }
    useEffect(
        () => {
            const navigationLink = document.querySelectorAll(".navbarSection a")
            navigationLink.forEach((element) =>
                element.addEventListener("click", navigationcontent)
            )
        },
        [
            // pageVariable
        ]
    )
    // useEffect(() => {
    //   const body = document.body,
    //     html = document.documentElement;

    //   const height = Math.max(
    //     body.scrollHeight,
    //     body.offsetHeight,
    //     html.clientHeight,
    //     html.scrollHeight,
    //     html.offsetHeight
    //   );
    //   console.log(height);
    //   document.documentElement.style.setProperty(pageVariable, height + "px");
    // }, [pageVariable]);
}
