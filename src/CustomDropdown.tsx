import React, { useState } from 'react';
import styled from 'styled-components';

// Define types for the component props
interface CustomDropdownProps {
  options: string[];
  selected?: string;
  onSelect: (value: string) => void;
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #ffffff;
  color: #333333;
  padding: 10px 15px;
  width: 300px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownContent = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: #ffffff;
  width: 100%;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
  margin-top: 5px;
  border-radius: 4px;
  overflow: hidden;
`;

const DropdownOption = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

interface DropdownArrowProps {
  isOpen: boolean;
}

const DropdownArrow = styled.span<DropdownArrowProps>`
  border: solid #333333;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 10px;
  transform: ${(props) => (props.isOpen ? 'rotate(-135deg)' : 'rotate(45deg)')};
  transition: transform 0.2s;
`;

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {selected || 'Select an author'}
        <DropdownArrow isOpen={isOpen} />
      </DropdownButton>
      <DropdownContent show={isOpen}>
        {options.map((option, index) => (
          <DropdownOption key={index} onClick={() => selectOption(option)}>
            {option}
          </DropdownOption>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default CustomDropdown;
