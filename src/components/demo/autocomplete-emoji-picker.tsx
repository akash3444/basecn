"use client";

import * as React from "react";

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePositioner,
  AutocompleteRow,
  AutocompleteTrigger,
} from "@/registry/components/ui/autocomplete";
import { Button } from "@/registry/components/ui/button";
import { Input } from "@/registry/components/ui/input";
import { Send, Smile } from "lucide-react";

export default function AutocompleteEmojiPicker() {
  const [pickerOpen, setPickerOpen] = React.useState(false);
  const [textValue, setTextValue] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");

  const textInputRef = React.useRef<HTMLInputElement | null>(null);

  function handleInsertEmoji(value: string | null) {
    if (!value || !textInputRef.current) {
      return;
    }

    const emoji = value;
    const start =
      textInputRef.current.selectionStart ??
      textInputRef.current.value.length ??
      0;
    const end =
      textInputRef.current.selectionEnd ??
      textInputRef.current.value.length ??
      0;

    setTextValue((prev) => prev.slice(0, start) + emoji + prev.slice(end));
    setPickerOpen(false);

    const input = textInputRef.current;
    if (input) {
      input.focus();
      const caretPos = start + emoji.length;
      input.setSelectionRange(caretPos, caretPos);
    }
  }

  return (
    <div className="relative w-full max-w-xs flex items-center gap-2">
      <Autocomplete
        items={emojiGroups}
        cols={COLUMNS}
        open={pickerOpen}
        onOpenChange={setPickerOpen}
        onOpenChangeComplete={() => setSearchValue("")}
        value={searchValue}
        onValueChange={(value, details) => {
          if (details.reason !== "item-press") {
            setSearchValue(value);
          }
        }}
      >
        <AutocompleteTrigger
          aria-label="Choose emoji"
          render={<Button variant="ghost" size="icon" />}
          className="absolute left-1 top-1/2 size-7 -translate-y-1/2"
        >
          <Smile className="size-4.5" />
        </AutocompleteTrigger>
        <AutocompletePositioner sideOffset={6} align="start">
          <AutocompletePopup className="w-full">
            <div className="px-3 mt-2">
              <AutocompleteInput
                placeholder="Search emojis…"
                className="w-64"
              />
            </div>
            <AutocompleteEmpty className="not-empty:py-4">
              No emojis found.
            </AutocompleteEmpty>
            <AutocompleteList>
              {(group: EmojiGroup) => (
                <AutocompleteGroup key={group.value} items={group.items}>
                  <AutocompleteGroupLabel className="uppercase">
                    {group.label}
                  </AutocompleteGroupLabel>
                  <div className="p-1" role="presentation">
                    {chunkArray(group.items, COLUMNS).map((row, rowIdx) => (
                      <AutocompleteRow
                        key={rowIdx}
                        className="grid grid-cols-5"
                      >
                        {row.map((rowItem) => (
                          <AutocompleteItem
                            key={rowItem.emoji}
                            value={rowItem}
                            onClick={() => {
                              handleInsertEmoji(rowItem.emoji);
                              setPickerOpen(false);
                            }}
                            className="text-2xl leading-none ml-1"
                          >
                            {rowItem.emoji}
                          </AutocompleteItem>
                        ))}
                      </AutocompleteRow>
                    ))}
                  </div>
                </AutocompleteGroup>
              )}
            </AutocompleteList>
          </AutocompletePopup>
        </AutocompletePositioner>
      </Autocomplete>
      <Input
        ref={textInputRef}
        type="text"
        placeholder="Type your message…"
        value={textValue}
        className="ps-9"
        onChange={(event) => setTextValue(event.target.value)}
      />
      <Button size="icon" className="size-8.5">
        <Send />
      </Button>
    </div>
  );
}

const COLUMNS = 5;

function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

interface EmojiItem {
  emoji: string;
  value: string;
  name: string;
}

interface EmojiGroup {
  value: string;
  label: string;
  items: EmojiItem[];
}

export const emojiCategories = [
  {
    label: "Smileys & Emotion",
    emojis: [
      { emoji: "😀", name: "grinning face" },
      { emoji: "😃", name: "grinning face with big eyes" },
      { emoji: "😄", name: "grinning face with smiling eyes" },
      { emoji: "😁", name: "beaming face with smiling eyes" },
      { emoji: "😆", name: "grinning squinting face" },
      { emoji: "😅", name: "grinning face with sweat" },
      { emoji: "🤣", name: "rolling on the floor laughing" },
      { emoji: "😂", name: "face with tears of joy" },
      { emoji: "🙂", name: "slightly smiling face" },
      { emoji: "🙃", name: "upside-down face" },
      { emoji: "😉", name: "winking face" },
      { emoji: "😊", name: "smiling face with smiling eyes" },
      { emoji: "😇", name: "smiling face with halo" },
      { emoji: "🥰", name: "smiling face with hearts" },
      { emoji: "😍", name: "smiling face with heart-eyes" },
      { emoji: "🤩", name: "star-struck" },
      { emoji: "😘", name: "face blowing a kiss" },
      { emoji: "😗", name: "kissing face" },
      { emoji: "☺️", name: "smiling face" },
      { emoji: "😚", name: "kissing face with closed eyes" },
      { emoji: "😙", name: "kissing face with smiling eyes" },
      { emoji: "🥲", name: "smiling face with tear" },
      { emoji: "😋", name: "face savoring food" },
      { emoji: "😛", name: "face with tongue" },
      { emoji: "😜", name: "winking face with tongue" },
      { emoji: "🤪", name: "zany face" },
      { emoji: "😝", name: "squinting face with tongue" },
      { emoji: "🤑", name: "money-mouth face" },
      { emoji: "🤗", name: "hugging face" },
      { emoji: "🤭", name: "face with hand over mouth" },
    ],
  },
  {
    label: "Animals & Nature",
    emojis: [
      { emoji: "🐶", name: "dog face" },
      { emoji: "🐱", name: "cat face" },
      { emoji: "🐭", name: "mouse face" },
      { emoji: "🐹", name: "hamster" },
      { emoji: "🐰", name: "rabbit face" },
      { emoji: "🦊", name: "fox" },
      { emoji: "🐻", name: "bear" },
      { emoji: "🐼", name: "panda" },
      { emoji: "🐨", name: "koala" },
      { emoji: "🐯", name: "tiger face" },
      { emoji: "🦁", name: "lion" },
      { emoji: "🐮", name: "cow face" },
      { emoji: "🐷", name: "pig face" },
      { emoji: "🐽", name: "pig nose" },
      { emoji: "🐸", name: "frog" },
      { emoji: "🐵", name: "monkey face" },
      { emoji: "🙈", name: "see-no-evil monkey" },
      { emoji: "🙉", name: "hear-no-evil monkey" },
      { emoji: "🙊", name: "speak-no-evil monkey" },
      { emoji: "🐒", name: "monkey" },
      { emoji: "🐔", name: "chicken" },
      { emoji: "🐧", name: "penguin" },
      { emoji: "🐦", name: "bird" },
      { emoji: "🐤", name: "baby chick" },
      { emoji: "🐣", name: "hatching chick" },
      { emoji: "🐥", name: "front-facing baby chick" },
      { emoji: "🦆", name: "duck" },
      { emoji: "🦅", name: "eagle" },
      { emoji: "🦉", name: "owl" },
      { emoji: "🦇", name: "bat" },
    ],
  },
  {
    label: "Food & Drink",
    emojis: [
      { emoji: "🍎", name: "red apple" },
      { emoji: "🍏", name: "green apple" },
      { emoji: "🍊", name: "tangerine" },
      { emoji: "🍋", name: "lemon" },
      { emoji: "🍌", name: "banana" },
      { emoji: "🍉", name: "watermelon" },
      { emoji: "🍇", name: "grapes" },
      { emoji: "🍓", name: "strawberry" },
      { emoji: "🫐", name: "blueberries" },
      { emoji: "🍈", name: "melon" },
      { emoji: "🍒", name: "cherries" },
      { emoji: "🍑", name: "peach" },
      { emoji: "🥭", name: "mango" },
      { emoji: "🍍", name: "pineapple" },
      { emoji: "🥥", name: "coconut" },
      { emoji: "🥝", name: "kiwi fruit" },
      { emoji: "🍅", name: "tomato" },
      { emoji: "🍆", name: "eggplant" },
      { emoji: "🥑", name: "avocado" },
      { emoji: "🥦", name: "broccoli" },
      { emoji: "🥬", name: "leafy greens" },
      { emoji: "🥒", name: "cucumber" },
      { emoji: "🌶️", name: "hot pepper" },
      { emoji: "🫑", name: "bell pepper" },
      { emoji: "🌽", name: "ear of corn" },
      { emoji: "🥕", name: "carrot" },
      { emoji: "🫒", name: "olive" },
      { emoji: "🧄", name: "garlic" },
      { emoji: "🧅", name: "onion" },
      { emoji: "🥔", name: "potato" },
    ],
  },
];

const emojiGroups: EmojiGroup[] = emojiCategories.map((category) => ({
  value: category.label,
  label: category.label,
  items: category.emojis.map((emoji) => ({
    ...emoji,
    value: emoji.name.toLowerCase(),
  })),
}));
