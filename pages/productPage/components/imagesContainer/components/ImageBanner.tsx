import styles from "./DiscountBannersImage.module.scss";
import Image from "next/image";
import React from "react";

const ImageBanner = ({title,image}) => {
    return (
        <div className={styles.image__banner}>
            <Image src={image}  alt={''}/>
            <p className={styles.image__banner_desc}>{title}</p>
        </div>
    );
}

export default ImageBanner;