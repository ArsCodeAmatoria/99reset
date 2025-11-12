# Videos Directory

This directory contains video files used throughout the 99% Reset website.

## Usage

Place your video files in this directory. Videos will be accessible at `/videos/your-video-name.mp4`

### Header Background Video

To add a background video to the header, update the root layout to pass the `videoUrl` prop:

```tsx
// app/layout.tsx
<Header videoUrl="/videos/your-video.mp4" />
```

### Supported Formats

- MP4 (recommended for best browser compatibility)
- WebM
- OGG

### Best Practices

1. **Optimize for web:**
   - Keep file size under 5MB for background videos
   - Use H.264 codec for MP4
   - Compress videos before uploading

2. **Dimensions:**
   - Header background: 1920x200px (or similar aspect ratio)
   - Hero sections: 1920x1080px

3. **Performance:**
   - Videos autoplay muted and loop
   - Consider using poster images as fallback
   - Background videos are displayed at 20% opacity by default

## Current Videos

(List your videos here as you add them)

- None yet - drop your first video here!
