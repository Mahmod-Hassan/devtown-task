import React from 'react';
import { CategoryContainer, HeaderContainer } from '../styles/Container.styles';
import Button from './Button';
import SelectInput from './SelectInput';

const Header = ({category, setCategory,price, setPrice}) => {
    const categories = ['all', 'cloth', 'shoe', 'book'];
    return(
        <HeaderContainer>
            <CategoryContainer>
            {categories.map((cat) => (
                <Button
                    key={cat}
                    isActive={category === cat}
                    onClick={() => setCategory(cat)}
                >{cat}</Button>
        ))}
            </CategoryContainer>
            <SelectInput price={price} setPrice={setPrice} />
        </HeaderContainer>
    )
}
export default Header;