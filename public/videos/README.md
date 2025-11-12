# Videos Directory

This directory contains video files used throughout the 99% Reset website.

## Usage

Place your video files in this directory. Videos will be accessible at `/videos/your-video-name.mp4`

### Header Video Player

The header includes a video player on the right side with play/pause controls. To enable it:

```tsx
// app/layout.tsx
<Header videoUrl="/videos/your-video.mp4" />
```

**Features:**
- Displays on the right side of the header
- Play button overlay when paused
- Pause button in top-right when playing
- Click anywhere on video to play/pause
- Hidden on mobile (< 768px) to save space
- Responsive sizing: 192px (md) to 256px (lg) wide

### Supported Formats

- MP4 (recommended for best browser compatibility)
- WebM
- OGG

### Best Practices

1. **Optimize for web:**
   - Keep file size under 10MB for header videos
   - Use H.264 codec for MP4
   - Compress videos before uploading
   - Target bitrate: 1-2 Mbps

2. **Dimensions:**
   - Header video: 16:9 aspect ratio (e.g., 1280x720 or 1920x1080)
   - Videos are displayed at 192px-256px wide, scaled proportionally

3. **Content:**
   - Include captions/text burned into the video (no separate caption support)
   - Keep videos short (15-60 seconds ideal)
   - First frame should be visually appealing (shown when paused)

4. **Accessibility:**
   - Videos start paused (user must click to play)
   - Play/pause buttons have aria-labels
   - No auto-play audio

## Current Videos

(List your videos here as you add them)

- your-video.mp4 - [Add description]
