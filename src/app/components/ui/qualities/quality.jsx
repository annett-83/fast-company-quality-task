import React from "react";
import PropTypes from "prop-types";
import { useQualitys } from "../../../hooks/useQuality";

const Quality = ({ id }) => {
    const { isLoading, getQuality } = useQualitys();
    const qualy = getQuality(id);
    if (!isLoading) {
        return (
            <span className={"badge m-1 bg-" + qualy.color}>{qualy.name}</span>
        );
    } else return "Loading...";
};
Quality.propTypes = {
    id: PropTypes.string.isRequired
};

export default Quality;
