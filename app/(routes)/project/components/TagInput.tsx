import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

interface TagInputProps {
  value: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
}

const TagInput: React.FC<TagInputProps> = ({ value, onChange, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault(); // Prevent form submission
        const trimmedValue = inputValue.trim();
        console.log({ trimmedValue });

      if (trimmedValue && !value.includes(trimmedValue)) {
        onChange([...value, trimmedValue]);
        setInputValue("");
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    onChange(value.filter((tag) => tag !== tagToRemove));
  };

  return (
      <div>
        <div className="flex flex-wrap gap-2">
       {value?.map((tag, index) => (
        <Badge key={index} >
          {tag}
          <button
            type="button"
            className="ml-2 text-red-600"
            onClick={() => removeTag(tag)}
          >
            x
          </button>
        </Badge>
      ))}
              </div>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md p-2 flex-1"
      />
    </div>
  );
};

export default TagInput;
