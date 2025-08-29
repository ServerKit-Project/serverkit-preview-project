import React from "react";

export interface ProjectMember {
  id: string;
  name: string;
  avatar?: string;
}

export interface ProjectTileProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "dashboard" | "home" | "list" | "list_simple" | "list_search" | "list_trash" | "list_modal";
  title: string;
  description?: string;
  date?: string;
  editedTime?: string;
  imageUrl?: string;
  members?: ProjectMember[];
  memberCount?: number;
  isStarred?: boolean;
  selected?: boolean;
  isPrivate?: boolean;
  isJoined?: boolean;
  memberInfo?: { members: number; guests: number };
  onStarClick?: () => void;
  onMenuClick?: () => void;
  onTileClick?: () => void;
  onSelect?: () => void;
  onJoin?: () => void;
  onLeave?: () => void;
  onRestore?: () => void;
  onDelete?: () => void;
  canAccess?: boolean;
  onAccessToggle?: (checked: boolean) => void;
  onKick?: () => void;
}


export interface DetailedProjectTileProps {
  className?: string;
  title: string;
  description?: string;
  date?: string;
  imageUrl?: string;
  members?: ProjectMember[];
  memberCount?: number;
  isStarred?: boolean;
  onStarClick?: () => void;
  onMenuClick?: () => void;
  onTileClick?: () => void;
}

export interface SimpleProjectTileProps {
  className?: string;
  title: string;
  editedTime?: string;
  imageUrl?: string;
  onMenuClick?: () => void;
  onTileClick?: () => void;
}

export interface ListProjectTileProps {
  className?: string;
  title: string;
  description?: string;
  date?: string;
  imageUrl?: string;
  members?: ProjectMember[];
  memberCount?: number;
  isStarred?: boolean;
  onStarClick?: () => void;
  onMenuClick?: () => void;
  onTileClick?: () => void;
}

export interface ListSimpleProjectTileProps {
  className?: string;
  title: string;
  date?: string;
  imageUrl?: string;
  onTileClick?: () => void;
}

export interface ListSearchProjectTileProps {
  className?: string;
  title: string;
  description?: string;
  imageUrl?: string;
  isPrivate?: boolean;
  isJoined?: boolean;
  memberInfo?: { members: number; guests: number };
  selected?: boolean;
  onSelect?: () => void;
  onTileClick?: () => void;
  onJoin?: () => void;
  onLeave?: () => void;
}

export interface ListTrashProjectTileProps {
  className?: string;
  title: string;
  description?: string;
  imageUrl?: string;
  isJoined?: boolean;
  memberInfo?: { members: number; guests: number };
  onTileClick?: () => void;
  onRestore?: () => void;
  onDelete?: () => void;
}

export interface ListModalProjectTileProps {
  className?: string;
  title: string;
  description?: string;
  imageUrl?: string;
  canAccess?: boolean;
  onTileClick?: () => void;
  onAccessToggle?: (checked: boolean) => void;
  onKick?: () => void;
}