import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';

interface AreaCoordinatorData {
  id: string;
  staff_role: string;
  assigned_area: string | null;
  pending: boolean;
}

export const useAreaCoordinator = () => {
  const { user, loading: authLoading } = useAuth();
  const [isAreaCoordinator, setIsAreaCoordinator] = useState(false);
  const [coordinatorData, setCoordinatorData] = useState<AreaCoordinatorData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || authLoading) {
      setLoading(false);
      return;
    }

    const checkAreaCoordinator = async () => {
      try {
        const { data, error } = await supabase
          .from('staff_registrations')
          .select('id, staff_role, assigned_area, pending')
          .eq('user_id', user.id)
          .eq('staff_role', 'Area Coordinator')
          .eq('pending', false)
          .maybeSingle();

        if (error) {
          console.error('Error checking area coordinator status:', error);
          return;
        }

        if (data) {
          setIsAreaCoordinator(true);
          setCoordinatorData(data);
        }
      } catch (error) {
        console.error('Error in useAreaCoordinator:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAreaCoordinator();
  }, [user, authLoading]);

  return { isAreaCoordinator, coordinatorData, loading: loading || authLoading };
};