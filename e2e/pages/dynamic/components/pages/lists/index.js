const e = React.createElement;

const ITEMS = [{"artist":"Lil Tecca","track":"Ransom"},{"artist":"NLE Choppa","track":"Shotta Flow (Feat. Blueface) [Remix]"},{"artist":"Baby Jesus (DaBaby)","track":"Suge"},{"artist":"NLE Choppa","track":"Shotta Flow 3"},{"artist":"Lil Tecca ","track":"Lil Tecca - Did It Again"},{"artist":"NLE Choppa","track":"Shotta Flow"},{"artist":"Ynw Melly","track":"Dangerously In Love (772 Love Pt. 2)"},{"artist":"POLO G","track":"Polo G feat. Lil TJay - Pop Out"},{"artist":"MUSTARD","track":"Ballin' (feat. Roddy Ricch)"},{"artist":"Lil Nas X","track":"Panini"},{"artist":"Juice WRLD","track":"Juice Wrld - RUN"},{"artist":"Shordie Shordie","track":"Betchua (Bitchuary)"},{"artist":"Post Malone","track":"Goodbyes (feat. Young Thug)"},{"artist":"LIL UZI VERT","track":"Sanguine Paradise"},{"artist":"Calboy","track":"Envy Me"},{"artist":"Ambjaay","track":"Uno"},{"artist":"Lil Tecca","track":"Lil Tecca - Bossanova"},{"artist":"Lil Baby","track":"Baby"},{"artist":"Lil Tjay","track":"Lil Tjay - Brothers (Prod by JDONTHATRACK & Protegebeatz)"},{"artist":"YK Osiris","track":"Worth It"}];

export default class ListsPage extends React.Component {
    render() {
        const items = ITEMS.map((i, idx) => {
            return e("li", { className: "list-group-item track", 'data-index': idx }, [
                e("div", { className: "track-details"}, [
                    e("h5", { className: "track-artist"}, i.artist),
                    e("small", { className: "track-name"}, i.track)
                ])
            ])
        });

        return e("div", { id: "tracks" }, [
            e("ul", { className: "list-group track-list" }, items)
        ])
    }
}