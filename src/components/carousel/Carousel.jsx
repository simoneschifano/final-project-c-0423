import styles from "./index.module.scss"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Carousel = ({ cardArrayData }) => {
    const navigate = useNavigate();

    const carouselImage = cardArrayData?.map((movie) => movie.image)
    const filteredMovie = cardArrayData?.map((movie) => movie.id)

    const [curr, setCurr] = useState(parseInt(cardArrayData.length / 2))

    const onHandleClick = (e) => navigate(`/movie/${e.target.id}`)

    const sliderImg = (i) => {
        setCurr(i)
    }

    const prevSlide = () =>
        setCurr((curr) => (curr === 0 ? cardArrayData.length - 1 : curr - 1))

    const nextSlide = () =>
        setCurr((curr) => (curr === cardArrayData.length - 1 ? 0 : curr + 1))

    return (
        <div className={styles.Carousel}>
            <div className={styles.Carousel__container}>
                <img onClick={() => sliderImg(curr === 0 ? cardArrayData.length - 1 : curr - 1)} className={styles.prevImg} src={carouselImage[curr === 0 ? cardArrayData.length - 1 : curr - 1]} />
                <img id={filteredMovie[curr]} onClick={onHandleClick} className={styles.currImg} src={carouselImage[curr]} />
                <img onClick={() => sliderImg(curr === cardArrayData.length - 1 ? 0 : curr + 1)} className={styles.nextImg} src={carouselImage[curr === cardArrayData.length - 1 ? 0 : curr + 1]} />
            </div>
            <div className={styles.btn__container}>
                <button onClick={prevSlide} className={styles.prevBtn}>{"<"}</button>
                <button onClick={nextSlide} className={styles.nextBtn}>{">"}</button>
            </div>
        </div>
    )
}

export default Carousel