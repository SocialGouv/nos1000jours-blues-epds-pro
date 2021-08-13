import React from "react";

export function HeaderImage({ image, title }) {
    const imageUrl = "url(" + image + ")";

    return (
        <div className="content-header-image" style={{ backgroundImage: imageUrl }}>
            <div className="image-title">{title}</div>
            <HeaderImageStyle />
        </div >
    )
}

const HeaderImageStyle = () => (
    <style jsx>{`
    .content-header-image {
        min-height: 150px;
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center center;
        display: flex;
        margin-bottom: 10px;
    }

    .image-title {
        width: 100%;
        text-align: end;
        margin-right: 50px;
        color: var(--bleu-clair);
        align-self: center;
        font-size: 35px;
        font-weight: bold;
    }
    `}</style>
);