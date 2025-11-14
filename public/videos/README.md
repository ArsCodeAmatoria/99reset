# Videos Directory

This directory contains video files used throughout the 99% Reset website.

## Usage

Place your video files in this directory. Videos will be accessible at `/videos/your-video-name.mp4`

### Hero Section Video Player

The home page hero section includes a video player with play/pause controls. To enable it:

```tsx
// components/home-hero.tsx
<VideoPlayer 
  videoUrl="/videos/your-video.mp4" 
  className="w-full aspect-square"
/>
```

**Features:**
- Displays in the hero section on the right side
- Perfect square aspect ratio (1:1) with rounded corners
- Play button overlay when paused
- Pause button in top-right when playing
- Click anywhere on video to play/pause
- Animated hover effects
- Responsive sizing

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
   - Hero video: 1:1 aspect ratio (perfect square, e.g., 720x720 or 1080x1080)
   - Videos are displayed responsively, scaled proportionally to container width

3. **Content:**
   - Include captions/text burned into the video (no separate caption support)
   - Keep videos short (15-60 seconds ideal)
   - First frame should be visually appealing (shown when paused)

4. **Accessibility:**
   - Videos start paused (user must click to play)
   - Play/pause buttons have aria-labels
   - No auto-play audio

## Current Videos

- **99reset 1.mp4** - Featured in the hero section of the home page. Main promotional video for the 99% Reset movement.
