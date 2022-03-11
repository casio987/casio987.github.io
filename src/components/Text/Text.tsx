import styled from "styled-components";

type TextProps = {
  fontSize?: string;
  color?: string;
  width?: string;
  fontWeight?: string;
  display?: "block" | "initial" | "inline";
  noMargin?: boolean;
  align?: "left" | "center" | "right";
};

export const Text = styled.p<TextProps>`
  font-size: ${(props: TextProps) => props.fontSize || "1rem"};
  color: ${(props: TextProps) => props.color || "black"};
  width: ${(props: TextProps) => props.width || "auto"};
  font-weight: ${(props: TextProps) => props.fontWeight || "normal"};
  display: ${(props: TextProps) => props.display || "block"};
  margin: ${(props: TextProps) => props.noMargin ? "0" : ""};
  align: ${(props: TextProps) => props.align || "left"};
`;