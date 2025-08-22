import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardHeader } from "@/components/base/card";
import { Members } from "@/components/ui/members";
import { Button } from "@/components/ui/button";
import { WorkspaceBadge } from "@/components/ui/workspacebadge";
import { Thumbnail } from "@/components/ui/thumbnail";
import { IconStar, IconDots, IconLock } from "@tabler/icons-react";
import { Switch } from "@/components/base/switch";
import { cva } from "class-variance-authority";
import type {
  ProjectTileProps,
  DetailedProjectTileProps,
  SimpleProjectTileProps,
  ListProjectTileProps,
  ListSimpleProjectTileProps,
  ListSearchProjectTileProps,
  ListTrashProjectTileProps,
  ListModalProjectTileProps,
} from "./types";

const projectTileVariants = cva(
  "relative overflow-hidden transition-all w-64 h-48 gap-1 cursor-pointer py-0 border-0 shadow-none rounded-none"
);

const DetailedProjectTile = React.forwardRef<
  HTMLDivElement,
  DetailedProjectTileProps
>(
  (
    {
      className,
      title,
      description,
      date,
      imageUrl,
      members = [],
      isStarred = false,
      onStarClick,
      onMenuClick,
      onTileClick,
    },
    ref
  ) => {
    const handleStarClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      onStarClick?.();
    };

    const handleMenuClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      onMenuClick?.();
    };

    return (
      <Card
        ref={ref}
        className={cn(projectTileVariants(), className)}
        onClick={onTileClick}
      >
        <Thumbnail size="xl" variant="card" imageUrl={imageUrl} alt={title}>
          <Button
            size="sm"
            variant="filled"
            style="icon"
            className="bg-white/90 backdrop-blur-sm hover:bg-white"
            onClick={handleStarClick}
          >
            <IconStar
              size={16}
              className={cn(
                "transition-colors",
                isStarred && "fill-yellow-400 text-yellow-400"
              )}
            />
          </Button>
          <Button
            size="sm"
            variant="filled"
            style="icon"
            className="bg-white/90 backdrop-blur-sm hover:bg-white"
            onClick={handleMenuClick}
          >
            <IconDots size={16} />
          </Button>
        </Thumbnail>

        <CardHeader className="px-0 gap-0">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-body-semibold line-clamp-1">{title}</h3>
              {date && <span className="text-caption">{date}</span>}
            </div>

            {description && (
              <div className="flex justify-between">
                <p className="text-subbody-regular line-clamp-1">
                  {description}
                </p>
                {members.length > 0 && <Members members={members} size="sm" />}
              </div>
            )}
          </div>
        </CardHeader>
      </Card>
    );
  }
);

DetailedProjectTile.displayName = "DetailedProjectTile";

const SimpleProjectTile = React.forwardRef<
  HTMLDivElement,
  SimpleProjectTileProps
>(
  (
    { className, title, editedTime, imageUrl, onMenuClick, onTileClick },
    ref
  ) => {
    const handleMenuClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      onMenuClick?.();
    };

    return (
      <Card
        ref={ref}
        className={cn(projectTileVariants(), "h-[172px]", className)}
        onClick={onTileClick}
      >
        <Thumbnail size="xl" variant="card" imageUrl={imageUrl} alt={title}>
          <div />
          <WorkspaceBadge />
        </Thumbnail>

        <CardHeader className="px-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-title line-clamp-1 flex-1 min-w-0">{title}</h3>
            {editedTime && (
              <span className="text-caption flex-shrink-0">{editedTime}</span>
            )}
          </div>
        </CardHeader>
      </Card>
    );
  }
);

SimpleProjectTile.displayName = "SimpleProjectTile";

const ListSimpleProjectTile = React.forwardRef<
  HTMLDivElement,
  ListSimpleProjectTileProps
>(({ className, title, imageUrl, onTileClick }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors w-full",
        className
      )}
      onClick={onTileClick}
    >
      <Thumbnail size="sm" variant="default" imageUrl={imageUrl} alt={title} />
      <div className="flex-grow min-w-0">
        <h3 className="text-body-regular line-clamp-1">{title}</h3>
        <p className="text-subbody-regular line-clamp-1">
          Project Description (truncate in 1 line)
        </p>
      </div>
    </div>
  );
});

ListSimpleProjectTile.displayName = "ListSimpleProjectTile";

const ListProjectTile = React.forwardRef<HTMLDivElement, ListProjectTileProps>(
  (
    {
      className,
      title,
      description,
      date,
      imageUrl,
      members = [],
      isStarred = false,
      onStarClick,
      onTileClick,
    },
    ref
  ) => {
    const handleStarClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      onStarClick?.();
    };

    return (
      <div
        ref={ref}
        className={cn(
          "group flex items-center gap-4 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors w-full",
          className
        )}
        onClick={onTileClick}
      >
        <Button
          size="sm"
          variant="filled"
          style="icon"
          className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm hover:bg-white w-6 h-6 p-0 transition-opacity"
          onClick={handleStarClick}
        >
          <IconStar
            size={14}
            className={cn(
              "transition-colors",
              isStarred && "fill-yellow-400 text-yellow-400"
            )}
          />
        </Button>
        <Thumbnail
          size="sm"
          variant="default"
          imageUrl={imageUrl}
          alt={title}
        />

        <div className="flex-grow min-w-0">
          <h3 className="text-body-regular line-clamp-1">{title}</h3>
          {description && (
            <p className="text-subbody-regular line-clamp-1">{description}</p>
          )}
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          {members.length > 0 && (
            <Members members={members} totalCount={members.length} size="sm" />
          )}
          {date && <span className="text-caption">{date}</span>}
        </div>
      </div>
    );
  }
);

ListProjectTile.displayName = "ListProjectTile";

// ListSearchProjectTile, ListTrashProjectTile 컴포넌트의 공통 인터페이스
interface ListProjectTileBaseProps {
  className?: string;
  title: string;
  description?: string;
  imageUrl?: string;
  isPrivate?: boolean;
  isJoined?: boolean;
  memberInfo?: { members: number; guests: number };
  onTileClick?: () => void;
  renderActions?: () => React.ReactNode;
}

const ListProjectTileBase = React.forwardRef<
  HTMLDivElement,
  ListProjectTileBaseProps
>(
  (
    {
      className,
      title,
      description,
      imageUrl,
      isPrivate,
      isJoined,
      memberInfo,
      onTileClick,
      renderActions,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group flex items-center gap-4 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors w-full",
          className
        )}
        onClick={onTileClick}
      >
        <Thumbnail
          size="lg"
          variant="default"
          imageUrl={imageUrl}
          alt={title}
        />

        <div className="flex-grow min-w-0">
          <div className="flex items-center gap-1">
            {isPrivate && <IconLock size={16} className="text-body-regular" />}
            <p className="text-body-regular line-clamp-1">{title}</p>
          </div>
          {description && (
            <p className="text-subbody-regular line-clamp-1">{description}</p>
          )}
          {memberInfo && (
            <p className="text-caption line-clamp-1">
              {isJoined ? (
                <>
                  <span className="text-subbody-semibold !text-info-deeper">
                    Joined
                  </span>{" "}
                  •{" "}
                </>
              ) : (
                ""
              )}
              <span className="text-subbody-regular">
                {memberInfo.members} members • {memberInfo.guests} guests
              </span>
            </p>
          )}
        </div>

        {renderActions && (
          <div className="flex items-center gap-2">{renderActions()}</div>
        )}
      </div>
    );
  }
);

ListProjectTileBase.displayName = "ListProjectTileBase";

const ListSearchProjectTile = React.forwardRef<
  HTMLDivElement,
  ListSearchProjectTileProps
>(
  (
    {
      className,
      title,
      description,
      imageUrl,
      isPrivate,
      isJoined,
      memberInfo,
      onTileClick,
      onJoin,
      onLeave,
    },
    ref
  ) => {
    const handleJoinLeave = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (isJoined) {
        onLeave?.();
      } else {
        onJoin?.();
      }
    };

    return (
      <ListProjectTileBase
        ref={ref}
        className={className}
        title={title}
        description={description}
        imageUrl={imageUrl}
        isPrivate={isPrivate}
        isJoined={isJoined}
        memberInfo={memberInfo}
        onTileClick={onTileClick}
        renderActions={() => (
          <Button
            size="lg"
            variant="filled"
            className="opacity-0 group-hover:opacity-100 transition-opacity min-w-[60px]"
            onClick={handleJoinLeave}
          >
            {isJoined ? "Leave" : "Join"}
          </Button>
        )}
      />
    );
  }
);

ListSearchProjectTile.displayName = "ListSearchProjectTile";

const ListTrashProjectTile = React.forwardRef<
  HTMLDivElement,
  ListTrashProjectTileProps
>(
  (
    {
      className,
      title,
      description,
      imageUrl,
      isJoined,
      memberInfo,
      onTileClick,
      onRestore,
      onDelete,
    },
    ref
  ) => {
    const handleRestore = (e: React.MouseEvent) => {
      e.stopPropagation();
      onRestore?.();
    };

    const handleDelete = (e: React.MouseEvent) => {
      e.stopPropagation();
      onDelete?.();
    };

    return (
      <ListProjectTileBase
        ref={ref}
        className={className}
        title={title}
        description={description}
        imageUrl={imageUrl}
        isJoined={isJoined}
        memberInfo={memberInfo}
        isPrivate={false}
        onTileClick={onTileClick}
        renderActions={() => (
          <>
            <Button
              size="lg"
              variant="filled"
              className="min-w-[90px]"
              onClick={handleRestore}
            >
              Restore
            </Button>
            <Button
              size="lg"
              variant="default"
              className="min-w-[80px]"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </>
        )}
      />
    );
  }
);

ListTrashProjectTile.displayName = "ListTrashProjectTile";

const ListModalProjectTile = React.forwardRef<
  HTMLDivElement,
  ListModalProjectTileProps
>(
  (
    {
      className,
      title,
      description,
      imageUrl,
      canAccess = true,
      onTileClick,
      onAccessToggle,
      onKick,
    },
    ref
  ) => {
    const handleKick = (e: React.MouseEvent) => {
      e.stopPropagation();
      onKick?.();
    };

    const handleAccessToggle = (checked: boolean) => {
      onAccessToggle?.(checked);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "group flex items-center gap-4 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors w-full",
          className
        )}
        onClick={onTileClick}
      >
        <Thumbnail
          size="sm"
          variant="default"
          imageUrl={imageUrl}
          alt={title}
        />

        <div className="flex-grow min-w-0">
          <p className="text-body-semibold line-clamp-1">{title}</p>
          <p className="text-subbody-regular line-clamp-1">
            {description || "Project Description (truncate in 1 line)"}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-body-regular">Can access</span>
            <Switch
              checked={canAccess}
              onCheckedChange={handleAccessToggle}
              className="data-[state=checked]:bg-[var(--info-base)]"
            />
          </div>
          <Button
            size="lg"
            variant="error"
            className="min-w-[60px]"
            onClick={handleKick}
          >
            Kick
          </Button>
        </div>
      </div>
    );
  }
);

ListModalProjectTile.displayName = "ListModalProjectTile";

export const ProjectTile = React.forwardRef<HTMLDivElement, ProjectTileProps>(
  ({ variant = "dashboard", ...props }, ref) => {
    switch (variant) {
      case "dashboard":
        return <DetailedProjectTile ref={ref} {...props} />;
      case "home":
        return <SimpleProjectTile ref={ref} {...props} />;
      case "list":
        return <ListProjectTile ref={ref} {...props} />;
      case "list_simple":
        return <ListSimpleProjectTile ref={ref} {...props} />;
      case "list_search":
        return <ListSearchProjectTile ref={ref} {...props} />;
      case "list_trash":
        return <ListTrashProjectTile ref={ref} {...props} />;
      case "list_modal":
        return <ListModalProjectTile ref={ref} {...props} />;
      default:
        return <DetailedProjectTile ref={ref} {...props} />;
    }
  }
);

ProjectTile.displayName = "ProjectTile";

export {
  DetailedProjectTile,
  SimpleProjectTile,
  ListProjectTile,
  ListSimpleProjectTile,
  ListSearchProjectTile,
  ListTrashProjectTile,
  ListModalProjectTile,
};
