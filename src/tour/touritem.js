/* 정보입력 */

const TourItem = ({article}) => {
    const {MAIN_TITLE,TITLE,GUGUN_NM,HOMEPAGE_URL,MAIN_IMG_NORMAL,ADDR1} = article;
    /* 콘텐츠명,제목,구군,홈페이지,이미지URL,주소 */
    return (
        <div className="item">
            <div className="title">
                <span>{GUGUN_NM} </span>
                <strong>{MAIN_TITLE}</strong>
                <h4>{TITLE}</h4>
            </div> {/* title end */}
            <img src={MAIN_IMG_NORMAL} alt={TITLE} />

            <p><img src="icons01.png" />{ADDR1}</p>
            {/* noreferrer : 해당페이지로 넘어가기 위해 http에게 요청함 */}
            {HOMEPAGE_URL && <a href={HOMEPAGE_URL} target="_blank" rel="noreferrer">바로가기</a>}
        </div> /* .item end */
    )
}

export default TourItem;