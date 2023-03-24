import React from "react";
import PropTypes from "prop-types";
import AppLayout from "../components/AppLayout";
const RetroMall = ({ Component }) => {
    return (
        <AppLayout Component={Component}>
            {/*<Component/>*/}
        </AppLayout>
    );
}

RetroMall.propType = {
    Component: PropTypes.elementType.isRequired,
};

export default RetroMall;
