import React from 'react';
import IconSwitch from './IconSwitch';
import CardVeiw from './CardView';
import ListVeiw from './ListView';

export class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = { icon: 'view_list' };
    }

    render() {
        return (
            <>
                <IconSwitch
                    icon={this.state.icon}
                    onSwitch={(veiw) => this.setState({ icon: veiw })}
                />
                {this.state.icon === 'view_list' ? <CardVeiw products={this.props.products} /> : <ListVeiw products={this.props.products} />}
            </>
        )
    }
}