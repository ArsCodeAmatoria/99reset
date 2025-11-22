# Images

Add your images to this folder. Images placed here will be accessible at `/images/[filename]` in your application.

## Usage

```tsx
import Image from 'next/image'

<Image 
  src="/images/your-image.jpg" 
  alt="Description"
  width={800}
  height={600}
/>
```

Or with regular img tag:
```html
<img src="/images/your-image.jpg" alt="Description" />
```

