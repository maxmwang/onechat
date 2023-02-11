/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { BlockPicker, ColorResult } from 'react-color';

interface ColorPickerProps {
  color: string;
  setColor: (color: string) => void;
}

function ColorPicker({ color, setColor }: ColorPickerProps) {
  const [open, setOpen] = useState(false);

  const handleChange = (c: ColorResult) => {
    setColor(c.hex);
    setOpen(false);
  };

  return (
    <div>
      <div className="swatch" onClick={() => setOpen(!open)}>
        <div className="color" style={{ background: color }} />
      </div>
      { open
        ? (
          <>
            <div className="cover" onClick={() => setOpen(!open)} />
            <div className="popover">
              <BlockPicker
                className="color-picker"
                color={color}
                onChange={(c) => setColor(c.hex)}
                onChangeComplete={handleChange}
              />
            </div>
          </>
        )
        : null }

    </div>
  );
}

export default ColorPicker;
