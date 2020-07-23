import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/buildControls'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

configure({ adapter: new Adapter() });

describe('<BurgerBuilder>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={()=>{}} />)
    });

    it('it should render <BuildControls> when it receiving ingredients', () => {
        wrapper.setProps({ingredients : {salad: 0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    })

})

