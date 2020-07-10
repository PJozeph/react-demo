import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Auxalirity';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentWillMount() {
            axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            });

            axios.interceptors.response.use(request => request, error => {
                console.log(error);
                this.setState({ error: error });
            })
        }

        errorConfirmed = () => {
            this.setState({
                error: null
            });
        }

        render() {
            return (
                <Aux>
                    <Modal 
                    show={this.state.error} 
                    clicked={this.errorConfirmed}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;