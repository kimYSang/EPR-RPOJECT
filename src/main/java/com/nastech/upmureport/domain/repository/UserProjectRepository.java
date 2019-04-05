//package com.nastech.upmureport.domain.repository;
//
//import java.util.List;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//
//import com.nastech.upmureport.domain.entity.Project;
//import com.nastech.upmureport.domain.entity.User;
//import com.nastech.upmureport.domain.entity.MemberProject;
//import com.nastech.upmureport.domain.pk.UserProjectPK;
//
//public interface UserProjectRepository extends JpaRepository<MemberProject, UserProjectPK> {
//	
//	@Query(value = "select * from userproject where deleteFlag = false and userId = :userId", nativeQuery = true)
//	public List<MemberProject> findAllByUser(@Param("userId") String userId);
//	public List<MemberProject> findAllByProject(Project project);
//	
////	@Query(value = "select up from userproject up where up.userId = :userId", nativeQuery = true)
////	public List<UserProject> findAllByUserId(@Param("userId") String userId);
//	
//	@Query(value = "select * from userproject where projId = :projId and userId = :userId", nativeQuery = true)
//	public MemberProject findOneByUserIdAndProjId(@Param("projId") Integer projId, @Param("userId") String userId);
//}
