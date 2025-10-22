"use client"

export interface PageView {
  path: string
  timestamp: string
  userAgent: string
}

const ANALYTICS_STORAGE_KEY = "golive_analytics"

export function trackPageView(path: string) {
  if (typeof window !== "undefined") {
    const analyticsStr = localStorage.getItem(ANALYTICS_STORAGE_KEY)
    const analytics: PageView[] = analyticsStr ? JSON.parse(analyticsStr) : []

    analytics.push({
      path,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
    })

    localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(analytics))
  }
}

export function getAnalytics(): PageView[] {
  if (typeof window !== "undefined") {
    const analyticsStr = localStorage.getItem(ANALYTICS_STORAGE_KEY)
    return analyticsStr ? JSON.parse(analyticsStr) : []
  }
  return []
}

export function getAnalyticsSummary() {
  const analytics = getAnalytics()
  const today = new Date()
  const last7Days = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
  const last30Days = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000)

  const todayViews = analytics.filter((a) => new Date(a.timestamp).toDateString() === today.toDateString()).length

  const last7DaysViews = analytics.filter((a) => new Date(a.timestamp) >= last7Days).length

  const last30DaysViews = analytics.filter((a) => new Date(a.timestamp) >= last30Days).length

  const pageViews = analytics.reduce(
    (acc, view) => {
      acc[view.path] = (acc[view.path] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  return {
    totalViews: analytics.length,
    todayViews,
    last7DaysViews,
    last30DaysViews,
    pageViews,
    topPages: Object.entries(pageViews)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10),
  }
}
