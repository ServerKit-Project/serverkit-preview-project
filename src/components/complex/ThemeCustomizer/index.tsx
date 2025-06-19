import React, { useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "../../../theme";

const CustomizerContainer = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.background.secondary};
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 20px;
`;

const ColorSection = styled.div`
  margin-bottom: 15px;
`;

const ColorInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  label {
    min-width: 150px;
    margin-right: 10px;
  }

  input[type="color"] {
    padding: 0;
    width: 50px;
    height: 30px;
  }
`;

interface ThemeCustomizerProps {
  onThemeChange: (newTheme: typeof defaultTheme) => void;
}

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  onThemeChange,
}) => {
  const [theme, setTheme] = useState(defaultTheme);

  const handleColorChange = (path: string[], value: string) => {
    const newTheme = { ...theme };
    let current: any = newTheme;

    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    current[path[path.length - 1]] = value;

    setTheme(newTheme);
    onThemeChange(newTheme);
  };

  return (
    <CustomizerContainer>
      <h3>테마 커스터마이저</h3>

      <ColorSection>
        <h4>기본 색상</h4>
        <ColorInput>
          <label>Primary</label>
          <input
            type="color"
            value={theme.colors.primary}
            onChange={(e) =>
              handleColorChange(["colors", "primary"], e.target.value)
            }
          />
        </ColorInput>
        <ColorInput>
          <label>Secondary</label>
          <input
            type="color"
            value={theme.colors.secondary}
            onChange={(e) =>
              handleColorChange(["colors", "secondary"], e.target.value)
            }
          />
        </ColorInput>
        <ColorInput>
          <label>Danger</label>
          <input
            type="color"
            value={theme.colors.danger}
            onChange={(e) =>
              handleColorChange(["colors", "danger"], e.target.value)
            }
          />
        </ColorInput>
      </ColorSection>

      <ColorSection>
        <h4>텍스트 색상</h4>
        <ColorInput>
          <label>Primary Text</label>
          <input
            type="color"
            value={theme.colors.text.primary}
            onChange={(e) =>
              handleColorChange(["colors", "text", "primary"], e.target.value)
            }
          />
        </ColorInput>
        <ColorInput>
          <label>Secondary Text</label>
          <input
            type="color"
            value={theme.colors.text.secondary}
            onChange={(e) =>
              handleColorChange(["colors", "text", "secondary"], e.target.value)
            }
          />
        </ColorInput>
      </ColorSection>

      <ColorSection>
        <h4>배경 색상</h4>
        <ColorInput>
          <label>Primary Background</label>
          <input
            type="color"
            value={theme.colors.background.primary}
            onChange={(e) =>
              handleColorChange(
                ["colors", "background", "primary"],
                e.target.value
              )
            }
          />
        </ColorInput>
        <ColorInput>
          <label>Secondary Background</label>
          <input
            type="color"
            value={theme.colors.background.secondary}
            onChange={(e) =>
              handleColorChange(
                ["colors", "background", "secondary"],
                e.target.value
              )
            }
          />
        </ColorInput>
      </ColorSection>
    </CustomizerContainer>
  );
};
