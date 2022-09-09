import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {ErrorIsFetching, isCheckedAC, toggleIsFetching, updateData} from "../redux/widget-reducer";
import Widget from "./Widget";
import {GetCity, GetReq} from "../api/api";
import Preloader from "../Preloader/Preloader";

const WidgetContainer = (props) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) {
            navigator.geolocation.getCurrentPosition(function (position) {
                GetReq(position.coords.longitude, position.coords.latitude)
                    .then(response => {
                        props.updateData(response.data.name, response.data.main.temp, response.data.weather[0].icon, response.data.weather[0].description, response.data.timezone)
                        props.toggleIsFetching(false)
                    })
                    .catch(err => {
                        props.updateData('Error', NaN, '')
                        props.toggleIsFetching(false)
                        return err
                    })
            });
        } else {
            GetCity(props.isChecked)
                .then((response) => {
                    props.updateData(response.data.name, response.data.main.temp, response.data.weather[0].icon, response.data.weather[0].description, response.data.timezone)
                    if (response.status === 200) {
                        props.ErrorIsFetching(false);
                    }
                })
                .catch(err => {
                    props.ErrorIsFetching(true);
                    return err;
                })
            return function cleanup(){
                props.ErrorIsFetching(false)
            }
        }
    }, [open, props.isChecked])


    return (
        <>
            {props.isFetching ? <Preloader/> : <Widget data={props} setOpen={setOpen}/>}
        </>
    )
}


let mapStateToProps = (state) => ({
    name: state.widgetPage.name,
    temp: state.widgetPage.temp,
    icon: state.widgetPage.icon,
    description: state.widgetPage.description,
    isFetching: state.widgetPage.isFetching,
    timezone: state.widgetPage.timezone,
    isChecked: state.widgetPage.isChecked,
    fetchedError: state.widgetPage.fetchedError
})

export default connect(mapStateToProps, {updateData, toggleIsFetching, isCheckedAC, ErrorIsFetching})(WidgetContainer)
