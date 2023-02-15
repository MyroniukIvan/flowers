import React, {useEffect, useState} from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image";
import redRose from "../../../../assets/redRose.png";
import rose from "../../../../assets/discountRose.png";
import gift from "../../../../assets/gift.png";
import candy from "../../../../assets/candy.png";
import box from "../../../../assets/box.png";
import styles from "../imagesContainer/imagesContainer.module.scss";

export default function App() {
    const [width, setWidth] = useState(0);
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        loop:true
    })
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const wrapperSliderHeight = {
        height:width < 400 ?'300px': '400px' && width < 600 ? '400px' : '500px',
        width:width < 400 ?'300px': '400px' && width < 600 ? '400px' : '500px',
    }

    return (
        <>
            <div className={styles.slider__wrapper}>
                <div className="navigation-wrapper">
                    <div ref={sliderRef} className='keen-slider' style={wrapperSliderHeight}>

                        <div style={{display: 'flex', justifyContent: 'center', position:'relative'}}
                             className="keen-slider__slide">
                            <Image src={redRose}
                                   alt={'red rose'}
                                   layout='fill'
                            />
                            <p className='description__slider'>Знижки <span>-6%</span> на всі
                                букети <span>по передзамовленню</span> на 8
                                березня</p>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center',position:'relative'}}
                             className="keen-slider__slide">
                            <Image src={rose}
                                   alt={'rose'}
                                   layout='fill'
                            />
                            <p className='description__slider'>Рози</p>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center',position:'relative'}}
                             className="keen-slider__slide">
                            <Image src={gift}
                                   alt={'gift'}
                                   layout='fill'
                            />
                            <p className='description__slider'>Подарунки</p>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center',position:'relative'}}
                             className="keen-slider__slide">
                            <Image src={candy}
                                   alt={'candy'}
                                   layout='fill'
                            />
                            <p className='description__slider'>Подарункові кошики</p>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center',position:'relative'}}
                             className="keen-slider__slide">
                            <Image src={box}
                                   alt={'box'}
                                   layout='fill'
                            />
                            <p className='description__slider'>Квіти в коробці</p>
                        </div>
                    </div>
                    {loaded && instanceRef.current && (
                        <>
                            <Arrow
                                left
                                onClick={(e: any) =>
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                            />

                            <Arrow
                                onClick={(e: any) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 1
                                }
                            />
                        </>
                    )}
                </div>
            </div>

            {loaded && instanceRef.current && (
                <div className="dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div>
            )}
        </>
    )
}

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${
                props.left ? "arrow--left" : "arrow--right"
            } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}
