import React, { Component } from 'react'
import { View, Picker, TouchableOpacity, Text } from 'react-native'
import { Input } from 'native-base'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Metrics } from '../../Themes'
import { createUserReview, updateUserReview, deleteReview } from '../../Actions/UserReviewAction'
import { createSeniorProfile, updateSeniorProfile } from '../../Actions/SeniorAction'

class APITestComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            sid: '1',
            uid: '1',
            feedback: '',
            rating: 1
        }
        this.createReview = this.createReview.bind(this)
        this.createReview2 = this.createReview2.bind(this)
        this.updateReview = this.updateReview.bind(this)
        this.deleteReview = this.deleteReview.bind(this)
        this.createSenior = this.createSenior.bind(this)
        this.updateSenior = this.updateSenior.bind(this)
    }

    createReview(){
        this.props.createUserReview(this.state)
    }

    createReview2(){
        this.props.createUserReview({
            sid: '2',
            uid: '3',
            feedback: 'Oompa',
            rating: 5
        })
    }

    updateReview(){
        this.props.updateUserReview(this.state)
    }

    deleteReview(){
        this.props.deleteReview(this.state)
    }

    createSenior(){
        this.props.createSeniorProfile({
            name: 'Ahma',
            email: 'Ahma@gmail.com',
            contactNo: '91919177'
        })
    }

    updateSenior(){
        console.log(this.props.senior.seniorKey)
        this.props.updateSeniorProfile({
            name: 'AhGong',
            email: 'AhGong@gmail.com',
            contactNo: '00000000',
            seniorKey: this.props.senior.seniorKey
        })
    }

    render(){
        return(
            <View style={{height:Metrics.HEIGHT * 0.7, width: Metrics.WIDTH * 0.9}}>
                <Input 
                    placeholder="Review"
                    onChangeText={feedback => this.setState({feedback})}
                    placeholderTextColor='black' 
                    style={{backgroundColor: 'yellow'}}
                    />
                <Picker
                    selectedValue={this.state.rating}
                    // style={{ height: 50, width: 100 }}
                    onValueChange={(rating) => this.setState({rating})}>
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                </Picker>
                <TouchableOpacity onPress={this.createReview}>
                    <Text>
                        Submit Review
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.createReview2}>
                    <Text>
                        Submit Review 2
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.updateReview}>
                    <Text>
                        Update Review
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.deleteReview}>
                    <Text>
                        Delete Review
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.createSenior}>
                    <Text>
                        Create Senior
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.updateSenior}>
                    <Text>
                        Update Senior
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


APITestComponent.propTypes = {
    createUserReview: PropTypes.func.isRequired,
    updateUserReview: PropTypes.func.isRequired,
    deleteReview: PropTypes.func.isRequired,
    createSeniorProfile: PropTypes.func.isRequired,
    updateSeniorProfile: PropTypes.func.isRequired,
    senior: PropTypes.object
}

const mapStateToProps = state => ({
    senior: state.senior
})

export default connect(mapStateToProps, {createUserReview, updateUserReview, deleteReview, createSeniorProfile, updateSeniorProfile})(APITestComponent)