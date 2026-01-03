# Project Thumbnails Directory

**Note**: This directory is no longer used. Project thumbnails are now sourced directly from the project folders in the workspace root.

## Current Image Locations

Project images are now located in their respective project folders:

| Project | Folder Location | Images |
|---------|----------------|--------|
| Flagr | `/Flagr/` | 3 screenshots |
| Sach.ai | `/Sach.ai/` | 3 screenshots |
| ResQ | `/ResQ/` | 4 screenshots |
| DjedOPS | `/DJEDops/` | 4 screenshots |
| Alert-Aid | `/Alert-Aid/` | 3 screenshots |
| FlowKey | `/Flowkey/` | 1 screenshot |

## How It Works

The portfolio automatically uses the first image from each project folder as the thumbnail, and all images in the folder are used for the project gallery.

## Adding New Project Images

1. Create a folder named after your project in the workspace root
2. Add screenshots/images to that folder
3. Update the project data in `constants.ts` to reference the folder path
4. The first image will be used as the thumbnail automatically

## Image Specifications

- **Format**: PNG (preferred) or JPG
- **Recommended Size**: 800x600px or larger (4:3 aspect ratio)
- **Optimization**: Compress images for web delivery (aim for <500KB per image)

## Legacy Note

The placeholder SVG files in this directory are no longer in use and can be safely deleted.
