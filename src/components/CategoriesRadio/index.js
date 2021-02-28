import React from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

import "./styles.scss";

const CategoriesRadio = ({ value, handleChange }) => {
  return (
    <ToggleButtonGroup
      data-testid="radio-group"
      name="value"
      type="radio"
      value={value}
      onChange={handleChange}
    >
      <ToggleButton
        data-testid="radio-option"
        className="categories-radio"
        variant="light"
        value="all"
      >
        All Races
      </ToggleButton>
      <ToggleButton
        data-testid="radio-option"
        className="categories-radio"
        variant="light"
        value="9daef0d7-bf3c-4f50-921d-8e818c60fe61"
      >
        Greyhound racing
      </ToggleButton>
      <ToggleButton
        data-testid="radio-option"
        className="categories-radio"
        variant="light"
        value="161d9be2-e909-4326-8c2c-35ed71fb460b"
      >
        Harness racing
      </ToggleButton>
      <ToggleButton
        data-testid="radio-option"
        className="categories-radio"
        variant="light"
        value="4a2788f8-e825-4d36-9894-efd4baf1cfae"
      >
        Horse racing
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default CategoriesRadio;
