export interface MenuItem {
  name: string;
  route: string;
  open: boolean;
  icon: Object|any;
  children: Array<ChildMenu>|null;
}

export interface ChildMenu {
  name: string;
  route: string;
}
