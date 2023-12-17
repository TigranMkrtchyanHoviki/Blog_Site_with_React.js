import ContentListStyles from "./style.module.css"

const ContentList = () => {

    const contentList = [
        {id: 0, title: "Lorem Ipsum", text: "Lorem lorem ipsum lorem ipsum lorem"},
        {id: 1, title: "Lorem Ipsum", text: "Lorem lorem ipsum lorem ipsum lorem"},
        {id: 2, title: "Lorem Ipsum", text: "Lorem lorem ipsum lorem ipsum lorem"},
        {id: 3, title: "Lorem Ipsum", text: "Lorem lorem ipsum lorem ipsum lorem"},
        {id: 4, title: "Lorem Ipsum", text: "Lorem lorem ipsum lorem ipsum lorem"},
        {id: 5, title: "Lorem Ipsum", text: "Lorem lorem ipsum lorem ipsum lorem"},
        {id: 6, title: "Lorem Ipsum", text: "Lorem lorem ipsum lorem ipsum lorem"},
        {id: 7, title: "Lorem Ipsum", text: "Lorem lorem ipsum lorem ipsum lorem"},
        {id: 8, title: "Lorem Ipsum", text: "Lorem lorem ipsum lorem ipsum lorem"},
        {id: 9, title: "Lorem Ipsum", text: "Lorem lorem ipsum lorem ipsum lorem"},
    ]

    return (
        <div class={`${ContentListStyles.container}`}>

                {
                     contentList.map((content, i) => {
                        return (
                            <div 
                               class={`${ContentListStyles.item_container}`}
                               key={content.id}
                            >
                                <img src={require(`../../image/00${i}.jpeg`)} />
                                <div class={`${ContentListStyles.text_container}`}>
                                    <h3>{content.title}</h3>
                                    <p>{content.text}</p>
                                </div>
                                <div class={`${ContentListStyles.cover}`}></div>
                            </div>
                        )
                     })
                }

        </div>
    )
}

export default ContentList