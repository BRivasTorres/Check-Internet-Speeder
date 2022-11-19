const btn = document.querySelector("button")
const contData = document.querySelector(".content")
const loadData = document.querySelector(".loader-content")
const loader = document.querySelector(".loader")

btn.addEventListener("click", (e) => {
    let imageLink = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Tokyo_Sky_Tree_2012_%E2%85%A4.JPG/280px-Tokyo_Sky_Tree_2012_%E2%85%A4.JPG",
        downloadSize = 8185374,
        time_start, time_end,
        downloadSrc = new Image();

        loadData.classList.add("hide")
        loader.classList.remove("hide")

        time_start = new Date().getTime()

    let cacheImg = "?nn=" + time_start;
    downloadSrc.src = imageLink + cacheImg

    downloadSrc.onload = function () {
        time_end = new Date().getTime();
        let timeDuration = (time_end - time_start) / 1000,
            loadedBytes = downloadSize * 8,
            totalSpeed = ((loadedBytes / timeDuration) / 1024 / 1024).toFixed(2)

        let i = 0, speedOUt

        const animate = () => {
            if( i < totalSpeed ) {
                contData.innerHTML = i.toFixed(2) +  "<small>Mbps</small>"
                setTimeout(animate, 20);
                i+=1.02;
            } else {
                contData.innerHTML = totalSpeed +  "<small>Mbps</small>";
            }
        }
        animate()

        loadData.classList.remove("hide")
        loadData.classList.add("result")
        loader.classList.add("hide")
        contData.classList.remove("hide")
        e.target.innerHTML = "CHECK AGAIN"
    }
})

