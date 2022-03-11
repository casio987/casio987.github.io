import styled from "styled-components";

type IconProps = {
  size: number;
}

export const Icon = styled.img<IconProps>`
  width: ${(props: IconProps) => props.size}rem;
  height: ${(props: IconProps) => props.size}rem;
`