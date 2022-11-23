import { GridItemType } from '../../types/GridItemType'
import * as c from './styles';
import b7svg from '../../svgs/b7.svg'
import { items } from '../../data/items';
import jungleLeaf from '../../assets/jungle-leaf.png'


type Props = {
    item: GridItemType,
    onClick: () => void
}

export const GridItem = ({item, onClick}: Props) => {
    return (
        <c.Container 
            showBackground={item.permanentShown || item.shown}
            onClick={onClick}
        >
            {item.permanentShown === false && item.shown === false &&
                <c.Icon src={jungleLeaf} alt=""/>
            }

            {(item.permanentShown || item.shown) && item.item !==null &&
                <c.Icon src={items[item.item].icon} alt=""/>
            }
        </c.Container>
    )

}