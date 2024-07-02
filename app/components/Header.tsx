import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useTheme } from "./Theme";
import styles from "./Header.module.scss";
import { Code2Icon, ContrastIcon, MoonIcon, SunIcon } from "lucide-react";

export const Header = () => {
  const { currentTheme, updateTheme } = useTheme();

  const getCurrentThemeIcon = () => {
    switch (currentTheme) {
      case "system":
        return (
          <ContrastIcon />
        );
      case "dark":
        return (
          <MoonIcon />
        );
      default:
        return (
          <SunIcon />
        );
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerTitle}>
        <Code2Icon size={"2rem"} />
        <span>
          j.shuttleworth
        </span>
      </div>
      <div>
        <DropdownMenu.Root modal={true}>
          <DropdownMenu.Trigger className={styles.headerButton} title="Change theme">
            {getCurrentThemeIcon()}
          </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
            <DropdownMenu.Content align="end" alignOffset={8} className={styles.headerMenu} loop={true}>
              <DropdownMenu.Item
                className={styles.headerMenuItem}
                data-selected={currentTheme === "system"}
                onSelect={() => updateTheme("system")}
                title="Match system theme">
                <ContrastIcon /> System
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className={styles.headerMenuItem}
                data-selected={currentTheme === "light"}
                onSelect={() => updateTheme("light")}
                title="Light theme">
                <SunIcon /> Light
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className={styles.headerMenuItem}
                data-selected={currentTheme === "dark"}
                onSelect={() => updateTheme("dark")}
                title="Dark theme">
                <MoonIcon /> Dark
              </DropdownMenu.Item>
              <DropdownMenu.Arrow  className={styles.headerMenuArrow} />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
}