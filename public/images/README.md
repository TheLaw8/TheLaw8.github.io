# Image Storage

This is where you should store your blog images.

## Recommended Structure

To keep your blog organized, create a new folder for each day or blog post ID:

```
public/images/
  ├── day-01-departure/
  │     ├── cover.jpg
  │     ├── airport.jpg
  │     └── plane.jpg
  ├── day-02-arrival/
  │     ├── cover.jpg
  │     └── street.jpg
  └── README.md
```

## How to Reference

In your `services/blogData.ts`, reference these images like this:

```typescript
coverImage: '/images/day-01-departure/cover.jpg',
```
