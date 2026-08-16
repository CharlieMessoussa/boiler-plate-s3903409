'use client'

import { useEffect, useState } from 'react'
import {
  onSnapshot,
  query,
  type CollectionReference,
  type DocumentData,
  type Query,
  type QueryConstraint,
} from 'firebase/firestore'

interface UseCollectionResult<T> {
  data: T[]
  loading: boolean
  error: Error | null
}

/**
 * Subscribe to a Firestore collection with real-time updates.
 *
 * Pass `null` for `collectionRef` to defer subscribing — e.g. while auth state
 * is still loading and a `where('uid', '==', user.uid)` constraint isn't ready yet.
 *
 * @example
 * const { data, loading, error } = useCollection(usersCollection, where('role', '==', 'admin'))
 */
export function useCollection<T extends DocumentData>(
  collectionRef: CollectionReference<T> | null,
  ...queryConstraints: QueryConstraint[]
): UseCollectionResult<T> {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!collectionRef) {
      return
    }

    const q: Query<T> =
      queryConstraints.length > 0
        ? query(collectionRef, ...queryConstraints)
        : query(collectionRef)

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as T[])
        setLoading(false)
      },
      (err) => {
        setError(err)
        setLoading(false)
      }
    )

    return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionRef])

  if (!collectionRef) {
    return { data: [], loading: true, error: null }
  }

  return { data, loading, error }
}
