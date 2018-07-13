export default function Repeat(props){
    const items = [];
    const { times = 10, children } = props;
    for(let i = 0; i < times; i++){
        let item = children(i);
        items.push(item);
    }
    return items;
}